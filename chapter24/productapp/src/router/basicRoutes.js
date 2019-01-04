import Preferences from '../components/Preferences'
import ProductDisplay from '../components/ProductDisplay'
import ProductEditor from '../components/ProductEditor'
import Products from '../components/Products'

const FilteredData = () => import('../components/FilteredData')

export default [
  { path: '/preferences', component: Preferences },
  {
    path: '/products',
    component: Products,
    children: [
      { name: 'table', path: 'list', component: ProductDisplay },
      {
        name: 'editor',
        path: ':op(create|edit)/:id(\\d+)?',
        component: ProductEditor,
      },
      { path: '', redirect: 'list' },
    ],
  },
  { path: '/edit/:id', redirect: (to) => `/products/edit/${to.params.id}` },
  { path: '/filter/:category', component: FilteredData },
]
