export const tableColumns = [
  {
    Header: "Автор",
    accessor: "author_display_name",
  },
  {
    Header: "Количество публикаций",
    accessor: "works_count",
  },
  {
    Header: "h-индекс",
    accessor: "h_index",
  },
  {
    Header: "ID Open Alex автора",
    accessor: "author_id",
  },
  {
    Header: "Цитирования",
    accessor: "cited_by_count",
  },
  {
    Header: "ORCHID",
    accessor: "orcid",
  },
  {
    Header: "Аффиляция",
    accessor: "last_known_institution_name",
  },
  {
    Header: "ID Open Alex аффиляции",
    accessor: "last_known_institution_id",
  },
  {
    Header: "ROR аффиляции",
    accessor: "last_known_institution_ror",
  },
  {
    Header: "Код страны",
    accessor: "last_known_institution_country_code",
  },
  {
    Header: "Публикации автора",
    accessor: "works_api_url",
  },
  {
    Header: "Тип аффиляции",
    accessor: "last_known_institution_type",
  },
  {
    Header: "Тематика исследований",
    accessor: "concepts_name",
  },
];

export const searchFieldsList = [
  { id: 1, name: "Автор", key: "display_name.search" },
  { id: 2, name: "Аффиляция", key: "last_know_institution.ror" },
  { id: 3, name: "Код страны", key: "last_know_institution.country_code" },
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
    author_id:
      (item?.id && (
        <a href={item.id} target="_blank" rel="noreferrer">
          {item.id}
        </a>
      )) ||
      "-",
    author_display_name: item?.display_name || "-",
    works_count: item?.works_count || "-",
    h_index: item?.summary_stats?.h_index || "-",
    cited_by_count: item?.cited_by_count || "-",
    orcid: item?.orcid || "-",
    last_known_institution_name: item?.last_known_institution?.display_name || "-",
    last_known_institution_id: item?.last_known_institution?.id || "-",
    last_known_institution_ror: item?.last_known_institution?.ror || "-",
    last_known_institution_country_code: item?.last_known_institution?.country_code || "-",
    works_api_url: item?.works_api_url || "-",
    last_known_institution_type: item?.last_known_institution?.type || "-",
    concepts_name: item?.x_concepts?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-",
  }));