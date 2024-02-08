
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users= [
  {
    userName : 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing : false
  },
  {
    userName : 'phralb',
    name: 'Pablo H.',
    isFollowing : true
  },
  {
    userName : 'TMChein',
    name: 'Tomás',
    isFollowing : true
  },
]

export function App() {
  //const formatUserName = (userName) => `@${userName}`;
  //const formattedUserName = <span>@midudev</span>
  //const [name,setName] = useState('midudev');

  return (
    //TODO: <></> Este reeemplaza a React.Fragment
    //TODO: Se puede simplificar esto isFollowing={true} con esto isFollowing

    <section className='App'>
      {
        users.map(({userName,name,isFollowing})=>(
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
