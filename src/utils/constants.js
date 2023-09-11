import CreatePage from "../components/CreatePage";
import Edit from "../components/Edit";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";
import Products from "../components/Products";

const routes = {

    HOME: {path: '/', name:'Home', element:<Home/>, isVisibleNavigation: true},

    PRODUCTS: {path: '/products', name:'Products List', 
    element:<Products/>, isVisibleNavigation: true},

    PRODUCT_ID: { path:'/products/:productId', name: 'Each Product', element: <ProductPage /> , isVisibleNavigation: false},

    CREATE: { path:'/create', name: 'Create Product', element: <CreatePage /> , isVisibleNavigation: true},

    EDIT: { path:'/:productId/edit', name: 'Edit Product', element: <Edit /> , isVisibleNavigation: false}


}

export {
    routes
};