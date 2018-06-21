// this array simulates a dataset
const items = 
[
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
];

// get by id
export const getById = (id) => {
    return (dispatch) => {
        const item = items[id]
        dispatch({
            type: 'GET_BY_ID',
            payload: item
        })
    }
}

// get all
export const getAll = () => {

    console.log("getting done 1")
    return (dispatch) => {
        console.log("gettin' it done");
        return dispatch({
            type: 'GET',
            payload: items
        })
    }
}