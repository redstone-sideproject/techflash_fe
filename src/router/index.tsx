import App from '@/App'
import NotFound from '@/pages/NotFound'

const routerInfo = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export default routerInfo
