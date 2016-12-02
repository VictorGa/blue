import { app, router } from './bootstrap'

export default (context) => {
  router.push(context.url)

  const matchedComponents = router.getMatchedComponents()

  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }

  return app
}
