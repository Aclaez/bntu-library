export const tableColumns = [
  {
    Header: "ID издания",
    accessor: "id",
  },
  {
    Header: "Количество цитирований",
    accessor: "cited_by_count",
  },
  {
    Header: "ISSN_I",
    accessor: "ids_issn_l",
  },
  {
    Header: "Код страны",
    accessor: "country_code",
  },
  {
    Header: "ISSN",
    accessor: "ids_issn",
  },
  {
    Header: "Тип издания",
    accessor: "type",
  },
  {
    Header: "Название издания",
    accessor: "display_name",
  },
  {
    Header: "Публикации и цитирования по годам",
    accessor: "counts_by_year",
  },
  {
    Header: "Издатель",
    accessor: "host_organization_name",
  },
  {
    Header: "Ключевые слова",
    accessor: "concepts_name",
  },
  {
    Header: "Количество публикаций",
    accessor: "works_count",
  },
  {
    Header: "Публикации",
    accessor: "works_api_url",
  },
];

export const searchFieldsList = [
  { id: 1, name: "Название издания", key: "display_name.search" },
  { id: 2, name: "Код страны", key: "country_code" },
  { id: 3, name: "ID издателя", key: "host_organization.id" },
  { id: 4, name: "ID издания", key: "openalex_id" },
  { id: 5, name: "ISSN", key: "issn" },
  { id: 6, name: "Дополнительный ISSN", key: "issn" },
  { id: 7, name: "Издатель", key: "publisher" },
  { id: 8, name: "ID ключевого слова", key: "x_concepts.id" },
];

export const filtersList = tableColumns.map((item) => ({
  text: item.Header,
  id: item.accessor,
}));

const filtersByDefaultNames = [
  "ID издания",
  "Количество цитирований",
  "ISSN_I",
  "Код страны",
  "ISSN",
  "Тип издания",
  "Название издания",
  "Издатель",
  "Ключевые слова",
  "Количество публикаций",
  "Публикации",
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
    cited_by_count: item?.cited_by_count || "-",
    ids_issn_l: item?.issn_l || "-",
    country_code: item?.country_code || "-",
    ids_issn: item?.issn?.find(x=>x!==undefined) || "-",
    type: item?.type || "-",
    display_name: item?.display_name || "-",
    counts_by_year: item?.counts_by_year?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ';') + ' год:' + currentValue.year + ", публикаций:" + currentValue.works_count + ", цитат:" + currentValue.cited_by_count, '') || "-",
    host_organization_name: item?.host_organization_name || "-",
    concepts_name: item?.x_concepts?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-",
    works_count: item?.works_count || "-",
    works_api_url: item?.works_api_url || "-",
  }));