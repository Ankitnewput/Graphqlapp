export const config = {
    env: {
        PORT: process.env.PORT || 5009,
        NODE_ENV: process.env.NODE_ENV || 'localhost',
        mongodb: {
            mongoUser: process.env.MONGODB_USER || 'root',
            mongoPassword: process.env.MONGODB_PASSWORD || '',
            mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
            mongoDatabase: process.env.MONGODB_DATABASE || 'tsgragphql',
        },
    }
}