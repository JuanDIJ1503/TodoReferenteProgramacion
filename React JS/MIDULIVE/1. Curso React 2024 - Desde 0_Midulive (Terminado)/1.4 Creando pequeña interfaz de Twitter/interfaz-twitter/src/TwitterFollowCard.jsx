import { useState } from 'react'

//TODO: Se puede agregar un valor por defecto a nuestro props
export function TwitterFollowCard({children,userName,initialIsFollowing}) {
  //TODO: isFollowing es el estado actual del elemento el cual obtiene con useState
  //TODO: setIsFollowing se utiliza cuando se requiere cambiar el estado
  const [isFollowing,setIsFollowing] = useState(initialIsFollowing);


  const textoButton = isFollowing ? 'Siguiendo':'Seguir';
  const buttonClassName = isFollowing 
  ? "tw-followCard-button is-following"
  : "tw-followCard-button"
  
  const buttonClick = () =>{
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de Midudev"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={buttonClick}>
          <span className='tw-followCard-Text'>{textoButton}</span>
          <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
