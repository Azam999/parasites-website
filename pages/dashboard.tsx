import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
    const fecalParasiteItems = [
        {
            title: 'Ascaris lumbricoides (Giant Intestinal Roundworm)',
            image: 'ascaris_lumbricoides.jpeg',
            description:
                'Ascaris lumbricoides is a parasitic disease caused by the parasitic species Ascaris lumbricoides. It is a common fungal infection in the human body.',
        },
        {
            title: 'Capillaria philippinensis (Pudoc Worm)',
            image: 'capillaria_philippinensis.jpeg',
            description:
                'Capillaria philippinensis is a parasitic disease caused by the parasitic species Capillaria philippinensis. It is a common fungal infection in the human body.',
        },
        {
            title: 'Enterobius vermicularis (Pinworm)',
            image: 'enterobius_vermicularis.jpeg',
            description:
                'Enterobius vermicularis is a parasitic disease caused by the parasitic species Enterobius vermicularis. It is a common fungal infection in the human body.',
        },
        {
            title: 'Fasciolopsis buski (Giant Intestinal Fluke)',
            image: 'fasciolopsis_buski.jpeg',
            description:
                'Fasciolopsis buski is a parasitic disease caused by the parasitic species Fasciolopsis buski. It is a common fungal infection in the human body.',
        },
        {
            title: 'Hookworm egg',
            image: 'hookworm_egg.jpeg',
            description:
                'Hookworm egg is a parasitic disease caused by the parasitic species Hookworm egg. It is a common fungal infection in the human body.',
        },
        {
            title: 'Hymenolepis diminuta (Rat Tapeworm)',
            image: 'hymenolepis_diminuta.jpeg',
            description:
                'Hymenolepis diminuta is a parasitic disease caused by the parasitic species Hymenolepis diminuta. It is a common fungal infection in the human body.',
        },
        {
            title: 'Hymenolepis nana (Dwarf Tapeworm)',
            image: 'hymenolepis_nana.jpeg',
            description:
                'Hymenolepis nana is a parasitic disease caused by the parasitic species Hymenolepis nana. It is a common fungal infection in the human body.',
        },
        {
            title: 'Opisthorchis viverrine (Southeast Asian Liver Fluke)',
            image: 'opisthorchis_viverrine.jpeg',
            description:
                'Opisthorchis viverrine is a parasitic disease caused by the parasitic species Opisthorchis viverrine. It is a common fungal infection in the human body.',
        },
        {
            title: 'Paragonimus spp (Lung Fluke)',
            image: 'paragonimus_spp.jpeg',
            description:
                'Paragonimus spp is a parasitic disease caused by the parasitic species Paragonimus spp. It is a common fungal infection in the human body.',
        },
        {
            title: 'Taenia spp. egg (Tapeworm)',
            image: 'taenia_spp_egg.jpeg',
            description:
                'Taenia spp. egg is a parasitic disease caused by the parasitic species Taenia spp. It is a common fungal infection in the human body.',
        },
        {
            title: 'Trichuris trichiura (Whipworm)',
            image: 'trichuris_trichiura.jpeg',
            description:
                'Trichuris trichiura is a parasitic disease caused by the parasitic species Trichuris trichiura. It is a common fungal infection in the human body.',
        },
    ];

    const bloodParasiteItems = [
        {
            title: 'Plasmodium',
            image: 'plasmodium.jpg',
            description:
                'From CDC: "Malaria (from genus Plasmodium) is a serious and sometimes fatal disease caused by a parasite that commonly infects a certain type of mosquito which feeds on humans."',
        },
        {
            title: 'Toxoplasma gondii',
            image: 'toxoplasma.jpg',
            description:
                'From CDC: "Toxoplasmosis (Toxoplasma infection) is considered to be a leading cause of death attributed to foodborne illness in the United States."',
        },
        {
            title: 'Babesia',
            image: 'babesia.jpg',
            description:
                'From CDC: "Babesiosis (Babesia infection) is caused by microscopic parasites that infect red blood cells and are spread by certain ticks."',
        },
        {
            title: 'Leishmania',
            image: 'leishmania.jpg',
            description:
                'From CDC: "Leishmaniasis (Leishmania infection) is a parasitic disease that is found in parts of the tropics, subtropics, and southern Europe. It is classified as a neglected tropical disease (NTD). Leishmaniasis is caused by infection with Leishmania parasites, which are spread by the bite of phlebotomine sand flies."',
        },
        {
            title: 'Trypanosome',
            image: 'trypanosome.jpg',
            description:
                'From CDC: "African Trypanosomiasis, also known as "sleeping sickness", is caused by microscopic parasites of the species Trypanosoma brucei. It is transmitted by the tsetse fly (Glossina species), which is found only in sub-Saharan Africa." From CDC: "Chagas disease is named after the Brazilian physician Carlos Chagas, who discovered the disease in 1909. It is caused by the parasite Trypanosoma cruzi, which is transmitted to animals and people by insect vectors and is found only in the Americas (mainly, in rural areas of Latin America where poverty is widespread)."',
        },
        {
            title: 'Trichomonad',
            image: 'trichomonad.jpg',
            description:
                'From CDC: "Trichomoniasis (or “trich”) is a very common STD caused by infection with Trichomonas vaginalis (a protozoan parasite). Although symptoms vary, most people who have trich cannot tell they have it."',
        },
    ];

    return (
        <Container>
            <div className={styles.accordions}>
                <div>
                    <h2>Fecal Parasites</h2>
                    <Accordion>
                        {fecalParasiteItems.map(
                            ({ title, image, description }, index) => (
                                <Accordion.Item
                                    eventKey={index.toString()}
                                    key={index}>
                                    <Accordion.Header
                                        className={styles.accordionHeader}>
                                        {title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="d-flex align-items-center justify-content-around">
                                            <Image
                                                src={`/parasites/fecal/${image}`}
                                                alt={image}
                                                width="200"
                                                height="200"
                                                className={styles.image}
                                            />
                                            <div className="w-50">
                                                <h4
                                                    className={
                                                        styles.parasiteName
                                                    }>
                                                    {title}
                                                </h4>
                                                <p
                                                    className={
                                                        styles.parasiteText
                                                    }>
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ),
                        )}
                    </Accordion>
                </div>
                <div>
                    <h2>Blood Parasites</h2>
                    <Accordion>
                        {bloodParasiteItems.map(
                            ({ title, image, description }, index) => (
                                <Accordion.Item
                                    eventKey={index.toString()}
                                    key={index}>
                                    <Accordion.Header
                                        className={styles.accordionHeader}>
                                        {title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="d-flex align-items-center justify-content-around">
                                            <Image
                                                src={`/parasites/blood/${image}`}
                                                alt={image}
                                                width="200"
                                                height="200"
                                                className={styles.image}
                                            />
                                            <div className="w-50">
                                                <h4
                                                    className={
                                                        styles.parasiteName
                                                    }>
                                                    {title}
                                                </h4>
                                                <p
                                                    className={
                                                        styles.parasiteText
                                                    }>
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ),
                        )}
                    </Accordion>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
