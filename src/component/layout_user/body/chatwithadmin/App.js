import { ChatEngine } from 'react-chat-engine';
import Header from '../../header/header';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '2c7cc592-35b0-4412-a564-1998ad4d35f5';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
    <Header/>
    <br/><br/><br/><br/><br/>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
