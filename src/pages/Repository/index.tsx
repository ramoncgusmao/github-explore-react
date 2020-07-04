import React from 'react';
import { useRouteMatch, Link} from 'react-router-dom';
import { Header,RepositoryInfo, Issues  } from './styles';
import logoImg from '../../assets/explore.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
    <Header>
      <div>

        <img src={logoImg} alt="Github Explorer" />
        <p>Github explorer</p>
      </div>
      <Link to="./dashboard"><FiChevronLeft size={16} />Voltar</Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/55562406?s=460&u=bbe8bd4e4795983cc11437898019654625af6cd9&v=4" />
        <div>
          <strong>Ramon top</strong>
          <p>uma descricaooooo</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1880</strong>
          <span>stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>forks</span>
        </li>
        <li>
          <strong>67</strong>
          <span>issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>
    <Issues>
   
        <Link  to={`/repositories`}>
 
          <div>
            <strong>okeoakoe</strong>
            <p>oskoqkskoe </p>
          </div>

          <FiChevronRight size={20} />
        </Link> 
     
      
    </Issues>
    </>
  
  )};

export default Repository;