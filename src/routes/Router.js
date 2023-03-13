import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AddOnPage from "../pages/AddOnPage";
import PaymentPage from "../pages/PaymentPage";
// import AddProductsPage from "../pages/AddProductsPage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import Footer from "../layout/Footer";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import AdminEditProductPage from "../pages/AdminEditProductPage";
import AdminPostProductPage from "../pages/AddminPostProductPage";
import OrderSummary from "../pages/OrderSummary";
import AdminProtectedRoute from "../features/auth/AdminProtectedRoute";
import OrderSummaryAdmin from "../features/admin/OrderSummaryAdmin";
import ApprovedPage from "../pages/ApprovedPage";
import CustomerProtectedRoute from "../features/auth/CustomerProtectedRoute";

const router = createBrowserRouter([
  { path: "/register", element: <RegisterPage /> },

  {
    path: "/admin-order-summary",
    element: (
      <AdminProtectedRoute>
        <OrderSummaryAdmin />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
        {" "}
        <AdminPage />{" "}
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/post-product",
    element: (
      <AdminProtectedRoute>
        {" "}
        <AdminPostProductPage />{" "}
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/edit-product/:id",
    element: (
      <AdminProtectedRoute>
        {" "}
        <AdminEditProductPage />{" "}
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <Footer />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/addOn",
        element: <AddOnPage />,
      },
      { path: "/payment", element: <PaymentPage /> },
      // { path: "/AddProducts", element: <AddProductsPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <CustomerProtectedRoute>
          <HomePage />
        </CustomerProtectedRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <CustomerProtectedRoute>
          <MenuPage />
        </CustomerProtectedRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/addon-page",
    element: (
      <ProtectedRoute>
        <CustomerProtectedRoute>
          <AddOnPage />
        </CustomerProtectedRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/cart-page",
    element: (
      <ProtectedRoute>
        <CustomerProtectedRoute>
          <CartPage />
        </CustomerProtectedRoute>
      </ProtectedRoute>
    ),
  },

  {
    path: "/order-summary",
    element: (
      <ProtectedRoute>
        <CustomerProtectedRoute>
          <OrderSummary />
        </CustomerProtectedRoute>
      </ProtectedRoute>
    ),
  },

  {
    path: "/approved-page",
    element: (
      <ProtectedRoute>
        <CustomerProtectedRoute>
          <ApprovedPage />
        </CustomerProtectedRoute>
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginPage from "../pages/LoginPage";
// import MenuPage from "../pages/MenuPage";
// import RegisterPage from "../pages/RegisterPage";
// import HomePage from "../pages/HomePage";
// import AddOnPage from "../pages/AddOnPage";
// import PaymentPage from "../pages/PaymentPage";
// // import AddProductsPage from "../pages/AddProductsPage";
// import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
// import Footer from "../layout/Footer";
// import ProtectedRoute from "../features/auth/ProtectedRoute";
// import CartPage from "../pages/CartPage";
// import AdminPage from "../pages/AdminPage";
// import AdminEditProductPage from "../pages/AdminEditProductPage";
// import AdminPostProductPage from "../pages/AddminPostProductPage";

// const router = createBrowserRouter([
//   { path: "/menu", element: <MenuPage /> },
//   { path: "/addon-page", element: <AddOnPage /> },
//   { path: "/cart-page", element: <CartPage /> },
//   { path: "/admin", element: <AdminPage /> },
//   { path: "/admin/post-product", element: <AdminPostProductPage /> },
//   { path: "/admin/edit-product/:id", element: <AdminEditProductPage /> },
//   {
//     path: "/login",
//     element: (
//       <RedirectIfAuthenticate>
//         <LoginPage />
//       </RedirectIfAuthenticate>
//     ),
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <Footer />
//       </ProtectedRoute>
//     ),
//     children: [
//       { path: "/", element: <HomePage /> },

//       {
//         path: "/addOn",
//         element: <AddOnPage />,
//       },
//       { path: "/payment", element: <PaymentPage /> },
//       // { path: "/AddProducts", element: <AddProductsPage /> },
//     ],
//   },
//   {
//     path: "/register",
//     element: (
//       <ProtectedRoute>
//         <RegisterPage />
//       </ProtectedRoute>
//     ),
//   },
// ]);

// export default function Router() {
//   return <RouterProvider router={router} />;
// }
