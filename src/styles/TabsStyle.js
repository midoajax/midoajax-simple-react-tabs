import styled from "styled-components";

export const TabsStyle = styled.div`
  max-width: 600px;
  margin: auto;
  .tabs {
    &__list {
      padding-left: 0;
      border-bottom: 1px solid #eee;
    }
    &__item {
      position: relative;
      display: inline-block;
      text-transform: Capitalize;
      padding: 15px 0;
      width: calc(100% / 3);
      text-align: center;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0;
        background: #cd0303;
        transition: 0.3s;
      }
      &.active:after {
        width: 100%;
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__content-wrapper {
      position: relative;
    }
    &__content {
      position: absolute;
      display: none;
      &.active {
        display: block;
      }
    }
  }
`;
