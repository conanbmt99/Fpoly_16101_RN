import { createServer, Model } from 'miragejs';

export const api = () => {

    if (window.server) {
        server.shutdown()
    }

    window.server = createServer({
        environment: 'development',
        models: {
            categories: Model,
            carts: Model,
            products: Model,
            users: Model
        },
        seeds(server) {
            server.create('category', {
                id: 1,
                name: 'Fruits',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'
            });
            server.create('category', {
                id: 2,
                name: 'Vegetables',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'
            });
            server.create('category', {
                id: 3,
                name: 'Meat',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'

            });
            server.create('category', {
                id: 4,
                name: 'Fish',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'

            });
            server.create('category', {
                id: 5,
                name: 'Sea food',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'

            });
            server.create('category', {
                id: 6,
                name: 'Juice',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'

            });
            server.create('category', {
                id: 7,
                name: 'Milk',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4'

            });
            server.create('product', {
                id: 1,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 2,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });

            server.create('product', {
                id: 2,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 2,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 3,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 4,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 5,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 6,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 7,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 8,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 9,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });
            server.create('product', {
                id: 10,
                name: 'Red Apple',
                image: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/apple.png?alt=media&token=fcd655f7-afca-4f2e-8db4-bcc4723026b9',
                categoryId: 1,
                price: 4.99,
                description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
            });

            server.create('user', {
                id: 7,
                name: 'Nguyen Anh',
                avatar: 'https://firebasestorage.googleapis.com/v0/b/my21may21project.appspot.com/o/noun_pumpkin_4002936%201.png?alt=media&token=a56ce074-1889-4270-9178-6af04cc053d4',
                username: 'admin',
                password: '123'
            });
        },
        routes() {
            this.namespace = 'api/';
            this.get('/categories', (schema, request) => {
                return schema.categories.all();
            });

            this.get('/categories/:id', (schema, request) => {
                let id = request.params.id;

                return schema.categories.find(id);
            });

            this.post('/categories', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                return schema.categories.create(attrs);
            });

            this.patch('/categories/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                let note = schema.categories.find(id);

                return note.update(newAttrs);
            });

            this.delete('/categories/:id', (schema, request) => {
                let id = request.params.id;

                return schema.categories.find(id).destroy();
            });

            this.get('/categories/:keyword/searching', (schema, request) => {
                const cats = schema.categories.all();
                let keyword = request.params.keyword;
                return cats.filter(i => i.name.search(keyword) >= 0) || []
            });

            this.get('/products/:categoryId/categoryId', (schema, request) => {
                let id = request.params.categoryId;
                const res =  schema.products.all();
                return res.filter(i => i.categoryId == id) || []
            });
            this.get('/products', (schema, request) => {
                return schema.products.all();
            });

            this.post('/users/login', (schema, request) => {
                
                let {username, password} = JSON.parse(request.requestBody);
                const res = schema.users.all();
                return res.filter(u => u.username == username && u.password == password) || [];
                
            });
        },
    })

}
