import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Button } from 'react-bootstrap';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from "../utils/fetchApi";
import PropertyList from './../components/PropertyList';

function Search({ properties }) {

  const router = useRouter();
  const path = router.pathname;
  const { query } = router;


  let handelPage = (status) => { 
    if(status == "back") {
      query.page = +query.page - 1
    } else {
      query.page = +query.page + 1

    }
    router.push({ pathname: path, query: query });
  }

  return (
    <>
    <Head>
      <title>search Property-Smart</title>
    </Head>
      <Container>
        <div className="head py-4">
          <h2 className="fs-1 text-capitalize">
            Find Your Best Property
          </h2>
        </div>
        <SearchFilters />
        <PropertyList PropertyData={properties} />

        {(properties.length < 12 && query.page == 1) ? null :
          <div className="pagination box-center py-4">
            {query.page != 1 && <Button onClick={() => handelPage("back")}>prvos page</Button>}

            
            <div className="px-5 h3 py-3">
              {query.page}
            </div>
            {properties.length >= 12 && <Button onClick={handelPage}>next page</Button>}
          </div>
        }
      </Container>
    </>

  )
}

export default Search

export async function getServerSideProps({ query }) {

  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || '';
  const minPrice = query.minPrice || '';
  const maxPrice = query.maxPrice || '';
  const roomsMin = query.roomsMin || '';
  const bathsMin = query.bathsMin || '';
  const sort = query.sort || '';
  const areaMax = query.areaMax || '';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';
  const page = query.page || '1';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&hitsPerPage=12&page=${page}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    }
  }
}