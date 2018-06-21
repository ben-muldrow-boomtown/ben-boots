// Main Reducer
const initialState = {
    plants : ['flower', 'mushroom'],
    items : [
        {
            name: 'the rain boot',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJSzTzOB9hSYvqg2wFjnfOQvLy9fnQT2TEethP-6qKkxF8jasbg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nibh sed lacinia imperdiet. Donec ultricies tellus lorem, sed faucibus elit consequat sit amet. Vivamus mollis sem in odio lacinia, vitae gravida diam condimentum.',
            id: 1,
        },
        {
            name: 'the ugly boot',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L0M1WJLSetYdjTlk0SH4CGY0450ZbPyzkYlc2hOZbwUNiXFVlw',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nibh sed lacinia imperdiet. Donec ultricies tellus lorem, sed faucibus elit consequat sit amet. Vivamus mollis sem in odio lacinia, vitae gravida diam condimentum.',
            id: 2,
        },
        {
            name: 'the invisiboot',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjVf2t0odaIIB8VH2orggyWTjw5Aaf4w6dBT-TW_1JHQDhJQiGQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nibh sed lacinia imperdiet. Donec ultricies tellus lorem, sed faucibus elit consequat sit amet. Vivamus mollis sem in odio lacinia, vitae gravida diam condimentum.',
            id: 3,
        },
        {
            name: 'the invisiboot',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjVf2t0odaIIB8VH2orggyWTjw5Aaf4w6dBT-TW_1JHQDhJQiGQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nibh sed lacinia imperdiet. Donec ultricies tellus lorem, sed faucibus elit consequat sit amet. Vivamus mollis sem in odio lacinia, vitae gravida diam condimentum.',
            id: 4,
        },
        {
            name: 'the invisiboot',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjVf2t0odaIIB8VH2orggyWTjw5Aaf4w6dBT-TW_1JHQDhJQiGQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nibh sed lacinia imperdiet. Donec ultricies tellus lorem, sed faucibus elit consequat sit amet. Vivamus mollis sem in odio lacinia, vitae gravida diam condimentum.',
            id: 5,
        },
        {
            name: 'the invisiboot',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjVf2t0odaIIB8VH2orggyWTjw5Aaf4w6dBT-TW_1JHQDhJQiGQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nibh sed lacinia imperdiet. Donec ultricies tellus lorem, sed faucibus elit consequat sit amet. Vivamus mollis sem in odio lacinia, vitae gravida diam condimentum.',
            id: 6
        }
    ]
}

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            console.log('added.');
            return [...state, action.payload]
        case 'REMOVE':
            console.log('removed.');
            return [...state]
        case 'GET':
            console.log('got.');
            return [...state, action.payload]
        case 'GET_BY_ID':
            console.log('got.');
            return [...state, action.payload]
        default:
            return state;
    }
}