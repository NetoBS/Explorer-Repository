import React from "react";
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explores" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit"> Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/105009963?v=4"
                        alt="Neto Sousa"
                    />
                    <div>
                        <strong>NetoBS/AppGoBarber</strong>
                        <p>Projeto APP de agendamento no barbeiro</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/105009963?v=4"
                        alt="Neto Sousa"
                    />
                    <div>
                        <strong>NetoBS/AppGoBarber</strong>
                        <p>Projeto APP de agendamento no barbeiro</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/105009963?v=4"
                        alt="Neto Sousa"
                    />
                    <div>
                        <strong>NetoBS/AppGoBarber</strong>
                        <p>Projeto APP de agendamento no barbeiro</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard