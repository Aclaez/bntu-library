export const tableColumns = [
  {
    Header: "ID публикации",
    accessor: "id",
  },
  {
    Header: "DOI публикации",
    accessor: "doi",
  },
  {
    Header: "Название публикации",
    accessor: "title",
  },
  {
    Header: "Год публикации",
    accessor: "publication_year",
  },
  {
    Header: "Дата публикации",
    accessor: "publication_date",
  },
  {
    Header: "Id издания",
    accessor: "host_id",
  },
  {
    Header: "Название издания",
    accessor: "host_display_name",
  },
  {
    Header: "Глава",
    accessor: "biblio_volume",
  },
  {
    Header: "Выпуск",
    accessor: "biblio_issue",
  },
  {
    Header: "Страницы",
    accessor: "biblio_pages",
  },
  {
    Header: "Издательство",
    accessor: "host_organization_name",
  },
  {
    Header: "Авторы",
    accessor: "autorships_autors_name",
  },
  {
    Header: "Цитирования",
    accessor: "cited_by_count",
  },
  {
    Header: "Цитирование ссылка",
    accessor: "cited_by_url",
  },
  {
    Header: "Ключевые слова",
    accessor: "concepts_name",
  },
  {
    Header: "Список литературы",
    accessor: "referenced_works_length",
  },
  {
    Header: "Релевантные публикации",
    accessor: "related_works",
  },
];

export const searchFieldsList = [
  { id: 1, name: "Универсальный поиск", key: "fulltext.search" },
  { id: 2, name: "Название публикации", key: "title.search" },
  { id: 3, name: "ID автора", key: "author.id" },
  { id: 4, name: "ORCHID", key: "author.orcid" },
  { id: 5, name: "ID направления", key: "concepts.id" },
  { id: 6, name: "Аффиляция", key: "institutions.ror" },
  { id: 7, name: "Дата публикации", key: "publication_date" },
];

export const filtersList = tableColumns.map((item) => ({
  text: item.Header,
  id: item.accessor,
}));

const filtersByDefaultNames = [
  "ID публикации",
  "DOI публикации",
  "Название публикации",
  "Год публикации",
  "Id издания",
  "Название издания",
  "Глава",
  "Выпуск",
  "Страницы",
  "Издательство",
  "Авторы",
  "Цитирование",
  "Цитирование ссылка",
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
    doi: item?.doi || "-",
    title: item?.title || "-",
    publication_year: item?.publication_year || "-",
    publication_date: item?.publication_date || "-",
    host_id: item?.primary_location?.source?.id || "-",
    host_display_name: item?.primary_location?.source?.display_name || "-",
    biblio_volume: item?.biblio?.volume || "-",
    biblio_issue: item?.biblio?.issue || "-",
    biblio_pages: item?.biblio?.first_page && item?.biblio?.last_page ? item?.biblio?.first_page + '-' + item?.biblio?.last_page : "-" || "-",
    host_organization_name: item?.primary_location?.source?.host_organization_name || "-",
    autorships_autors_name: item?.authorships?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.author?.display_name, '') || "-",
    cited_by_count: item?.cited_by_count || "-",
    cited_by_url: item?.cited_by_api_url || "-",
    concepts_name: item?.concepts?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-",
    referenced_works_length: item?.referenced_works?.length || "-",
    related_works: item?.related_works?.join(', ') || "-",
  }));
