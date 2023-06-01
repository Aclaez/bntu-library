export const tableColumns = [
  {
    Header: "ID Open Alex",
    accessor: "id",
  },
  {
    Header: "ROR аффиляции",
    accessor: "ror",
  },
  {
    Header: "Аффиляция",
    accessor: "display_name",
  },
  {
    Header: "Аббревиатура",
    accessor: "display_name_acronym",
  },
  {
    Header: "Количество публикаций",
    accessor: "works_count",
  },
  {
    Header: "Цитирования",
    accessor: "cited_by_count",
  },
  {
    Header: "Публикации и цитирования по годам",
    accessor: "counts_by_year",
  },
  {
    Header: "URL",
    accessor: "homepage_url",
  },
  {
    Header: "Wikipedia",
    accessor: "wikipedia",
  },
  {
    Header: "Wikidata",
    accessor: "wikidata",
  },
  {
    Header: "Код страны",
    accessor: "country_code",
  },
  {
    Header: "Город",
    accessor: "geo_city",
  },
  {
    Header: "ID города",
    accessor: "geo_city_id",
  },
  {
    Header: "Страна",
    accessor: "geo_country",
  },
  {
    Header: "Тип аффиляции",
    accessor: "type",
  },
  {
    Header: "Тематика исследований",
    accessor: "concepts_name",
  },
  {
    Header: "Альтернативные названия",
    accessor: "international_names",
  },
];

export const searchFieldsList = [
  { id: 1, name: "Аффиляция", key: "ror" },
  { id: 2, name: "Название организации", key: "display_name.search" },
  { id: 3, name: "Тип организации", key: "type" },
  { id: 4, name: "Код страны", key: "country_code" },
];

export const filtersList = tableColumns.map((item) => ({
  text: item.Header,
  id: item.accessor,
}));

const filtersByDefaultNames = [
  "Автор",
  "Количество публикаций",
  "h-индекс",
  "Код страны",
];

export const filtersByDefault = filtersList.filter((item) =>
  filtersByDefaultNames.some((name) => name === item.text)
);

export const getTransformedData = (data) =>
  data.map((item) => ({
    id:
      (item?.id && (
        <a href={item.id} target="_blank" rel="noreferrer">
          {item.id}
        </a>
      )) ||
      "-",
    ror: item?.ror || "-",
    display_name: item?.display_name || "-",
    display_name_acronym: item?.display_name_acronyms?.find(x=>x!==undefined) || "-",
    works_count: item?.works_count || "-",
    cited_by_count: item?.cited_by_count || "-",
    counts_by_year: item?.counts_by_year?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ';') + ' год:' + currentValue.year + ", публикаций:" + currentValue.works_count + ", цитат:" + currentValue.cited_by_count, '') || "-",
    homepage_url: item?.homepage_url || "-",
    wikipedia: item?.ids?.wikipedia || "-",
    wikidata: item?.ids?.wikidata || "-",
    country_code: item?.country_code || "-",
    geo_city: item?.geo?.city || "-",
    geo_city_id: item?.geo?.geonames_city_id || "-",
    geo_country: item?.geo?.country || "-",
    type: item?.type || "-",
    concepts_name: item?.x_concepts?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-",
    //international_names: item?.international?.display_name?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-", // need return all rows
  }));