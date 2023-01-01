import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
type GsspPageProps = InferGetServerSidePropsType<typeof getServerSideProps>
const HomePage: NextPage = (props: GsspPageProps) => {
  return (
    <>
      <MainLayout title="Bienvenido">
        <Home />
      </MainLayout>
    </>
  );
};
type Props = {
  locale?: string
  locales?: string[]
}
export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
  locales,
}) => {
  return {
    props: {
      locale,
      locales,
    },
  }
}
export default HomePage;
