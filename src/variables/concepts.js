export const tableColumns = [
  {
    Header: "ID направления",
    accessor: "id",
  },
  {
    Header: "Уровень вышестоящего уровня",
    accessor: "ancestors_level",
  },
  {
    Header: "Wikidata",
    accessor: "wikidata",
  },
  {
    Header: "ID вышестоящего уровня",
    accessor: "ancestors_id",
  },
  {
    Header: "Направление",
    accessor: "display_name",
  },
  {
    Header: "Wikidata вышестоящего уровня",
    accessor: "ancestors_wikidata",
  },
  {
    Header: "Количество публикаций",
    accessor: "works_count",
  },
  {
    Header: "Публикации по теме",
    accessor: "works_api_url",
  },
  {
    Header: "Количество цитирований",
    accessor: "cited_by_count",
  },
  {
    Header: "Релевантные направления",
    accessor: "related_concepts",
  },
  {
    Header: "Публикации и цитирования по годам",
    accessor: "counts_by_year",
  },
  {
    Header: "Альтернативные названия",
    accessor: "international_display_name",
  },
  {
    Header: "Уровень",
    accessor: "level",
  },
  {
    Header: "Описание",
    accessor: "description",
  },
  {
    Header: "Направление вышестоящего уровня",
    accessor: "ancestors_display_name",
  },
];

export const searchFieldsList = [
  { id: 1, name: "Ключевое слово", key: "display_name.search" },
  { id: 2, name: "Уровень", key: "level" },
  { id: 3, name: "ID вышестоящего уровня", key: "ancestors.id" },
  { id: 4, name: "Wikidata", key: "wikidata_id" },
];

export const filtersList = tableColumns.map((item) => ({
  text: item.Header,
  id: item.accessor,
}));

const filtersByDefaultNames = [
  "ID направления",
  "Уровень вышестоящего уровня",
  "Wikidata",
  "ID вышестоящего уровня",
  "Направление",
  "Wikidata вышестоящего уровня",
  "Количество публикаций",
  "Публикации по теме",
  "Количество цитирований",
  "Релевантные направления",
  "Уровень",
  "Описание",
  "Направление вышестоящего уровня",
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
    ancestors_level: item?.ancestors?.find(x=>x!==undefined)?.level || "-",
    wikidata: item?.wikidata || "-",
    ancestors_id: item?.ancestors?.find(x=>x!==undefined)?.id || "-",
    display_name: item?.display_name || "-",
    ancestors_wikidata: item?.ancestors?.find(x=>x!==undefined)?.wikidata || "-",
    works_count: item?.works_count || "-",
    works_api_url: item?.works_api_url || "-",
    cited_by_count: item?.cited_by_count || "-",
    related_concepts: item?.related_concepts?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-",
    counts_by_year: item?.counts_by_year?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ';') + ' год:' + currentValue.year + ", публикаций:" + currentValue.works_count + ", цитат:" + currentValue.cited_by_count, '') || "-",
    //international_display_name: item?.international?.display_name?.join(', ') || "-",
    level: item?.level || "-",
    description: item?.description || "-",
    ancestors_display_name: item?.ancestors?.find(x=>x!==undefined)?.display_name || "-",
  }));