import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../styles/GlobalStyles";

const ComponentWrap = ({ title, contents }) => {
  return (
    <Box>
      <h1>{title}</h1>
      {contents}
    </Box>
  );
};

ComponentWrap.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.object,
};

export default ComponentWrap;
