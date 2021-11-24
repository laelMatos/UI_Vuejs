/* 
  Intercepta as solicitações de direcionamento para rotas
*/

import store from '../store'

export default async (to, from, next) => {
  //Define o titulo da pagina
  document.title = `${to.name} - Teste UI`

  //Valida o redirecionamento para paginas de acordo com o token e tipo de usuário
  switch (to.name) {
    case '/':
      console.log("token: " + store.getters['auth/hasToken'])
      console.log("userADM: " + store.getters['auth/UserAdm'])
      if(store.getters['auth/hasToken'] && store.getters['auth/UserAdm']){
        next({ name: 'home' })
        break;
      }else{
        next({ name: 'login' })
        break;
      }
      
    case 'home':
      console.log("token: " + store.getters['auth/hasToken'])
      console.log("userADM: " + store.getters['auth/UserAdm'])
      if(store.getters['auth/hasToken'] && store.getters['auth/UserAdm']){
        next()
        break;
      }else{
        next({ name: 'login' })
        break;
      }

    case 'login':
      console.log("token: " + store.getters['auth/hasToken'])
      console.log("userADM: " + store.getters['auth/UserAdm'])
      if (store.getters['auth/hasToken'] && store.getters['auth/UserAdm']) {     
        next({ name: 'home' })
        break;
      } else {
        next()
        break;
      }

    default:
      //se a rota for diferente de login e existir o token
  if (to.name !== 'login' && !store.getters['auth/hasToken'] && !store.getters['auth/UserAdm']) {
    try {    
      //aciona a função ActionCheckToken
      await store.dispatch('auth/ActionCheckToken')
      
      //Define o endereço da pagina
      next({ name: to.path })
      break;
    } catch (err) {
      next({ name: 'login' })
      break;
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken'] && store.getters['auth/UserAdm']) {     
      next({ name: 'home' })
      break;
    } else {
      console.log("Entrou")
      next()
      break;
    }
  }
  }

}
