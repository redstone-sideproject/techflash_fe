// import App from '@/App'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const routerInfo = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export default routerInfo
