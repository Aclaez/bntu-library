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
    Header: "ID издания",
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
    Header: "Тип издания",
    accessor: "host_type",
  },
  {
    Header: "URL",
    accessor: "landing_page_url",
  },
  {
    Header: "OA к журналу",
    accessor: "host_is_oa",
  },
  {
    Header: "Тип публикации",
    accessor: "type",
  },
  {
    Header: "OA к публикации",
    accessor: "open_access_is_oa",
  },
  {
    Header: "Статус OA к публикации",
    accessor: "open_access_oa_status",
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
  { id: 1, name: "ID автора", key: "author.id" },
  { id: 2, name: "Дата публикации", key: "from_publication_date" },
  { id: 3, name: "Конечный период", key: "to_publication_date" },
];

export const filtersList = tableColumns.map((item) => ({
  text: item.Header,
  id: item.accessor,
}));

const filtersByDefaultNames = [
  "ID публикации",
  "Название публикаций",
  "Дата публикации",
  "Название издания",
  "Глава",
  "Выпуск",
  "Страницы",
  "Издательство",
  "Авторы",
  "Цитирования",
  "Цитрование ссылка",
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
    host_type: item?.primary_location?.source?.type || "-",
    landing_page_url: item?.primary_location?.landing_page_url || "-",
    host_is_oa: item?.primary_location?.is_oa || "-",
    type: item?.type || "-",
    open_access_is_oa: item?.open_access?.is_oa || "-",
    open_access_oa_status: item?.open_access?.oa_status || "-",
    autorships_autors_name: item?.authorships?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.author?.display_name, '') || "-",
    cited_by_count: item?.cited_by_count || "-",
    cited_by_url: item?.cited_by_api_url || "-",
    concepts_name: item?.concepts?.reduce((accumulator, currentValue) => accumulator + (accumulator === '' ? '' : ', ') + currentValue.display_name, '') || "-",
    referenced_works_length: item?.referenced_works?.length || "-",
    related_works: item?.related_works?.join(', ') || "-",
  }));