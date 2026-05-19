import {
  renderPlayerPage
} from '../modules/players/presentation/pages/playerPage'

export function router() {

  const path =
    window.location.pathname

  switch (path) {

    case '/':

      renderPlayerPage()

      break

    default:

      renderPlayerPage()
  }
}