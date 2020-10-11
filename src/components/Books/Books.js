import React from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";
import styles from "./Books.scss";
import InfiniteScroll from "react-infinite-scroller";

const APIKey = "AIzaSyDi6MnuiAZGvbpwdNQ-lw-1NqTulUXl1os";
const ITEMS_PER_PAGE = "20";
class Books extends React.Component {
  state = {
    value: "",
    books: [],
    totalItems: 1,
    isLoading: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSort = (e) => {
    this.setState({ 
      sort: e.target.value});
  };

  handleTitleSubmit = e => {
    e.preventDefault();

    this.setState({ books: [] });
  };

  fetchBooks = () => {
    const startIndex = this.state.books.length;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}${this.state.sort}&download=epub&key=${APIKey}&startIndex=${startIndex}&maxResults=${ITEMS_PER_PAGE}`;
    this.setState({ isLoading: true });
    return fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState(prevState => ({
          books: [...prevState.books, ...(data.items || [])],
          totalItems: data.totalItems,
          isLoading: false
        }))
      );
  };

  render() {
    return (
      <section className={styles.component}>
        <Search
          data={this.state}
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleTitleSubmit}
          sort={this.state.sort}
          changee={this.handleSort}
        />

        <InfiniteScroll
          loadMore={this.fetchBooks}
          hasMore={
            this.state.totalItems > this.state.books.length &&
            !this.state.isLoading
          }
          loader={
            <div key={0} className="loader">
              Loading ...
            </div>
          }
        >
          <Results books={this.state.books} />
        </InfiniteScroll>
      </section>
    );
  }
}
export default Books;