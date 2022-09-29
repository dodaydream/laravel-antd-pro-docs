# 快速開始

這一節以 users 表爲例，介紹了如何快速創建該表的 CRUD 邏輯

## 創建 migration

創建數據庫遷移文件並執行遷移

```bash
php artisan make:migration <name_of_the_migration_file>
php artisan migrate
```

## 創建 model

創建相應的 Model

```bash
php artisan make:model User
```

## 創建 policy

創建 Model 的訪問政策

```bash
php artisan make:policy UserPolicy --model=App\\Models\\User
```

## 創建 Controller

```
php artisan make:controller UserController --resource
```

## 註冊路由

在 `Modules\Admin\Routes\web.php` 中註冊路由

```php
Route::resource('users', 'UserController');
```

## 撰寫 CRUD 邏輯

```php
class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }
    
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => QueryBuilder::for(User::class)->paginate(
                request('per_page', 10)
            )->appends(request()->query())
        ]);
    }
    
    public function show(User $user)
    {
        return Inertia::render('Users/Show', [
            'user' => $user
        ]);
    }
    
    public function create()
    {
        return Inertia::render('Users/Create');
    }
    
    public function store()
    {
        $validated = request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['nullable', 'string', 'min:8', 'confirmed']
        ]);
        
       	$user = User::create($validated);
        
        return redirect()->route('admin.users.show', $user->id);
    }
    
    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user
        ]);
    }
    
    public function update(User $user)
    {
        $validated = request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'password' => ['nullable', 'string', 'min:8', 'confirmed']
        ]);
        
       	$user->update($validated)
            
        return redirect()->route('admin.users.edit', $user->id);
    }
    
    public function delete(User $user)
    {
        $user->delete();
        
        return redirect()->back();
    }
    
    public function bulkDelete()
    {
        $validated = request()->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:users'
        ]);
        
        User::destroy(request('ids'));
        
        return redirect()->back();
    }
}
```

## 創建前端文件

### 使用 `CrudTable` 組件

Users/Index.vue

```vue
<template>
	<crud-table
   		:table="table"
        resource="admin.users"
     />
</template>

<script>
export default {
    props: {
        user: {
            required: true,
            type: Object
        }
    },
    setup(props) {
        const columns = reactive([
            {title: 'ID', dataIndex: 'id', sorter: true},
            {title: 'email_verified_at', dataIndex: 'email_verified_at', align: 'right'},
            {title: 'created_at', dataIndex: 'created_at', sorter: true},
            {title: 'updated_at', dataIndex: 'updated_at', sorter: true},
            {title: 'action', dataIndex: 'action', fixed: 'right', align: 'center'}
        ]);

        const table = useTable(props.users, {
            fieldName: 'users',
            rowKey: 'id',
            selectable: true,
            columns: columns
        });

        return { table, dayjs }
    },
}
</script>
```

### 使用 `useForm`

Users/Form.vue

```vue
<template>
    <a-form layout="vertical" class="max-w-xl">
        <a-form-item label="name" name="name" v-bind="form.validation.name">
            <a-input v-model:value="form.name" />
        </a-form-item>

        <a-form-item label="email" name="email" v-bind="form.validation.email">
            <a-input v-model:value="form.email" type="email" />
        </a-form-item>

        <a-form-item label="password" name="password" v-bind="form.validation.password">
            <a-input-password v-model:value="form.password" />
        </a-form-item>

        <a-form-item label="password_confirmation" name="password_confirmation" v-bind="form.validation.password_confirmation">
            <a-input-password v-model:value="form.password_confirmation" />
        </a-form-item>
    </a-form>
</template>

<script>
import useForm from '::admin/Utils/useForm';

export default {
    props: {
        data: {
            type: Object,
            required: false,
            default: () => ({})
        }
    },
    setup (props) {
        const form = useForm({
            name: props.data.name ?? '',
            email: props.data.email ?? '',
            roles: props.data.roles ?? [],
            password: '',
            password_confirmation: ''
        })

        return { form }
    }
}
</script>
```

Users/Create.vue

```vue
<template>
	<form ref="form" />
	<a-button @click="submit">Create</a-button>
</template>

<script>
import Form from './Form.vue'
    
export default {
    components: {
        Form
    },
    methods: {
        submit () {
            this.$refs.form.submit('POST', route('admin.users.store'), {
                onSuccess: () => {
                    this.$message.succesS('User Created!')
                }
            })
        }
    }
}
</script>
```

Users/Edit.vue

```vue
<template>
	<form ref="form" :data="user" />
	<a-button @click="submit">Update</a-button>
</template>

<script>
import Form from './Form.vue'
    
export default {
    props: {
      user: {
          required: true,
          type: Object
      }  
    },
    components: {
        Form
    },
    methods: {
        submit () {
            this.$refs.form.submit('PUT', route('admin.users.update', this.user), {
                onSuccess: () => {
                    this.$message.succesS('User Updated!')
                }
            })
        }
    }
}
</script>
```





