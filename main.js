function pegar_informações_do_github () {
    const url = `https://api.github.com/users/willdalp`
     fetch (url)
     .then(resposta => resposta.json() )     
     .then(data => {
        user_avatar.src = data.avatar_url
     })
}


pegar_informações_do_github ()