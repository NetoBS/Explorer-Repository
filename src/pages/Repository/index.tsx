import React from "react";
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';


interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const  { params }  =  useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Git Explorer" />
                <a href="/">
                    <FiChevronLeft size={16}/>
                    voltar
                </a>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/105009963?v=4" alt="NetoBS"/>
                    <div>
                        <strong>NetoBS/AppGoBarber</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <a  href={"addsadas"}>

                    <div>
                        <strong>asdsadas</strong>
                        <p>asdsadsad</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Issues>
        </>
    )
};

export default Repository;