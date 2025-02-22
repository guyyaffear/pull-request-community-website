import { GetStaticProps } from 'next';
import Description from '../components/description/Description';
import Layout from '../components/layout/layout';
import { PersonCard } from '../components/personCard/personCard';
import { getPeople, IPerson } from '../services/people';
import styles from '../styles/Home.module.scss';
import { randomShuffle } from '../utils/randomShuffle';
import MainPageDescription from '../components/main-page-description/MainPageDescription';

interface IHomeProps {
  people: IPerson[];
}

export default function Home({ people }: IHomeProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <Description descriptionOutput={MainPageDescription()} />
        <div className={styles.cards__wrapper}>
          {people.map((person, i) => (
            <PersonCard key={person.name + i} person={person} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      people: randomShuffle(getPeople()),
    },
  };
};
