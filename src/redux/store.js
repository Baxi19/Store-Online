import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import itemsReducer from "./itemsDuck";

// Redux: Store
/* 
La idea básica detrás de Ducks es crear una estructura de archivos que sea escalable y fácil de seguir. 
El uso de Redux para administrar el estado da como resultado un gran número de acciones que se utilizan en múltiples componentes 
y una estructura de estado que tiene varios niveles de profundidad. 
Como resultado, una forma eficiente de importar funcionalidad en múltiples archivos / componentes es clave para evitar errores.
La metodología Ducks también es útil para razonar sobre lo que está haciendo cada parte de su aplicación. 
Está muy claro dónde se originan las acciones y qué tipos de reductores están tratando.
Ducks también crea un patrón consistente y fácil para las importaciones / exportaciones en su sistema de archivos, 
eliminando errores y permitiendo la facilidad de uso en muchos componentes.
*/
const rootReducer = combineReducers({
  items: itemsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}