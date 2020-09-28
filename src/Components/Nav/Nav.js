import React, { useContext, useRef, useState } from "react";
import { PageHeader, Input } from "antd";
import { connect } from "react-redux";
import { getSong } from "../Dependencies/Redux/actions";
import { LocaleContext } from "../Dependencies/Messages/LocaleContext";
import { Cascader } from "antd";
import { FormattedMessage } from "react-intl";
import messages from "../Dependencies/Messages/Messages";
const { Search } = Input;

const options = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "fr",
    label: "French",
  },
  {
    value: "hin",
    label: "Hindi",
  },
  {
    value: "ml",
    label: "Malyalam",
  },
  {
    value: "es",
    label: "Spanish",
  },
];
const mapDispatchToProps = (dispatch) => ({
  getSong: (value) => dispatch(getSong(value)),
});
const NavBar = ({ getSong }) => {
  const [locale, setLocale] = useContext(LocaleContext);
  const nextLocale = locale;
  const [search, setSearch] = useState("");
  const val = useRef(null);
  const handleSearch = (value) => {
    setSearch(value);
    getSong(value);
  };
  return (
    <div>
      <Search
        allowClear={true}
        placeholder="input search text"
        onSearch={(value) => handleSearch(value)}
        enterButton
      />
      <div style={{ display: "flex" }}>
        <Cascader
          allowClear={false}
          defaultValue={["en"]}
          options={options}
          onChange={(e) => {
            setLocale(e[0]);
          }}
          placeholder="Change Language"
        />
        {search && locale != "hin" ? (
          <h3
            style={{
              color: "white",
              fontFamily: `'Open Sans Condensed', sans-serif`,
              marginLeft: "30px",
            }}
          >
            <FormattedMessage {...messages.search} />
            :'{search}'
          </h3>
        ) : search ? (
          <h3
            style={{
              color: "white",
              fontFamily: `'Open Sans Condensed', sans-serif`,
              marginLeft: "30px",
            }}
          >
            '{search}':
            <FormattedMessage {...messages.search} />
          </h3>
        ) : null}
      </div>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(NavBar);
