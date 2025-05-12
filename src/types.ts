import { Config, GetModelPropsFunc } from '@node-in-layers/core/index.js'
import { RestClientProviderConfig } from 'functional-models-orm-rest-client/types.js'

type RestClientServices = Readonly<{
  /**
   * A function that gives ModelProps. This is useful for empowering rest models (functional-models-orm-rest-client)
   */
  getModelProps: GetModelPropsFunc
}>

type RestClientServicesLayer = Readonly<{
  '@node-in-layers/rest-client': RestClientServices
}>

type RestClientFeatures = Readonly<object>

type RestClientFeaturesLayer = Readonly<{
  '@node-in-layers/rest-client': RestClientFeatures
}>

type RestClientConfig = Config &
  Readonly<{
    '@node-in-layers/rest-client': {
      restConfig: RestClientProviderConfig
    }
  }>

export {
  RestClientServices,
  RestClientServicesLayer,
  RestClientFeatures,
  RestClientFeaturesLayer,
  RestClientConfig,
}
