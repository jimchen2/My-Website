import React from "react";
import PreviewCard from "./PreviewCard";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { paddingtop } from "../config/global";
import { useGlobalColorScheme } from "../config/global.js";
import styled from "styled-components";

const BlogContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 2rem;
`;

const ToggleButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  padding-right: 20%;
  padding-left: 20%;
`;

const StyledToggleButton = styled(ToggleButton)`
  background-color: ${(props) =>
    props.isSelected ? props.colors.color_blue_2 : "transparent"};
  border: none;
  color: ${(props) =>
    props.isSelected ? props.colors.color_white : props.colors.color_blue_2};
  flex-shrink: 0;
  flex-grow: 0;
  top: ${(props) => `${props.paddingtop}px`};
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.colors.color_blue_2};
    color: ${(props) => props.colors.color_white};
  }
`;

const PreviewCardContainer = styled.div`
  margin-top: 2rem;
`;

function Blog({ data, postTypes, selectedTypes, onSelectionChange }) {
  const { colors } = useGlobalColorScheme();

  return (
    <BlogContainer>
      <ToggleButtonGroupContainer>
        <ToggleButtonGroup
          type="checkbox"
          value={selectedTypes}
          onChange={onSelectionChange}
        >
          <StyledToggleButton
            key={"all"}
            id={`tbg-btn-${"all"}`}
            value={"all"}
            isSelected={selectedTypes.includes("all")}
            colors={colors}
            paddingtop={paddingtop}
          >
            {`all (${data.length})`}
          </StyledToggleButton>

          {postTypes.map(({ type, count }) => (
            <StyledToggleButton
              key={type}
              id={`tbg-btn-${type}`}
              value={type}
              isSelected={selectedTypes.includes(type)}
              colors={colors}
              paddingtop={paddingtop}
            >
              {type} ({count})
            </StyledToggleButton>
          ))}
        </ToggleButtonGroup>
      </ToggleButtonGroupContainer>

      <PreviewCardContainer>
        {data.map((post, index) => (
          <PreviewCard
            key={index}
            title={post.title}
            text={post.body}
            date={post.date}
            type={post.type}
          />
        ))}
      </PreviewCardContainer>
    </BlogContainer>
  );
}

export default Blog;