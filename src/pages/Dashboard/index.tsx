import React from 'react';
import { Title, Form, Icon, Repositories } from './styles';
import {FiChevronRight} from 'react-icons/fi';
import logoImg from '../../assets/explore.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Icon>

        <img src={logoImg} alt="Github Explorer" />
        <p>Github explorer</p>
      </Icon>
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="text">
          <img src="https://avatars3.githubusercontent.com/u/55562406?s=460&u=bbe8bd4e4795983cc11437898019654625af6cd9&v=4"
            alt="Diego fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy textao</p>
          </div>

          <FiChevronRight size={20} />
        </a> 
        <a href="text">
          <img src="https://avatars3.githubusercontent.com/u/55562406?s=460&u=bbe8bd4e4795983cc11437898019654625af6cd9&v=4"
            alt="Diego fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy textao</p>
          </div>

          <FiChevronRight size={20}/>
        </a> 
        <a href="text">
          <img src="https://avatars3.githubusercontent.com/u/55562406?s=460&u=bbe8bd4e4795983cc11437898019654625af6cd9&v=4"
            alt="Diego fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy textao</p>
          </div>

          <FiChevronRight size={20}/>
        </a> 
      </Repositories>
    </>
  );
};

export default Dashboard;