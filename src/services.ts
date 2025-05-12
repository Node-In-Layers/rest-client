import { ServicesContext } from '@node-in-layers/core/index.js'
import { createOrm, ModelInstanceFetcher } from 'functional-models'
import { datastoreProvider as restDatastoreProvider } from 'functional-models-orm-rest-client'
import { memoizeValueSync } from '@node-in-layers/core/utils.js'
import { RestClientServices, RestClientConfig } from './types.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const create = (
): RestClientServices => {
  const getDatastoreProvider = memoizeValueSync(
    (context: ServicesContext<RestClientConfig>) => {
      return restDatastoreProvider(
        context.config['@node-in-layers/rest-client'].restConfig
      )
    }
  )

  const getModelProps = <
    TModelOverrides extends object = object,
    TModelInstanceOverrides extends object = object,
  >(
    context: ServicesContext,
  ) => {
    const myContext = context as ServicesContext<RestClientConfig>

    const datastoreProvider = getDatastoreProvider(myContext)

    const orm = createOrm({
      datastoreAdapter: datastoreProvider,
    })

    return {
      Model: orm.Model,
      fetcher: orm.fetcher as ModelInstanceFetcher<
        TModelOverrides,
        TModelInstanceOverrides
      >,
    }
  }
  return {
    getModelProps,
  }
}

export { create }
