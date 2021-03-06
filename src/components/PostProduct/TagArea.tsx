import React, { useState, memo } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import Autosuggest from 'react-autosuggest';

type PROPS = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagArea: React.FC<PROPS> = memo(({ tags, setTags }) => {
  const [tagMenu, setTagMenu] = useState<string[]>([]);
  const states = tagMenu;
  // @ts-ignore

  const autocompleteRenderInput = ({ addTag, ...props }) => {
    // @ts-ignore
    const handleOnChange = (e, { newValue, method }) => {
      if (method === 'enter') {
        e.preventDefault();
      } else {
        props.onChange(e);
      }
    };

    const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
    const inputLength = inputValue.length;

    let suggestions = states.filter((state) => {
      return state.toLowerCase().slice(0, inputLength) === inputValue;
    });
    //  stateがオブジェクトではなく配列の時

    return (
      // @ts-ignore
      <Autosuggest
        ref={props.ref}
        suggestions={suggestions}
        shouldRenderSuggestions={(value) => value && value.trim().length > 0}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        // @ts-ignore
        inputProps={{
          ...props,
          onChange: handleOnChange,
          placeholder: 'タグ(魔除け、~と繋がりたい、など)',
        }}
        onSuggestionSelected={(e, { suggestion }) => {
          addTag(suggestion);
        }}
        onSuggestionsClearRequested={() => {}}
        onSuggestionsFetchRequested={() => {}}
      />
    );
  };

  // @ts-ignore
  return (

    <TagsInput
      renderInput={autocompleteRenderInput}
      value={tags}
      onChange={(tags: any) => setTags(tags)}
          // @ts-ignore
      maxTags={"5"}
      style={{ width: '100%' }}
    />
  );
});

export default TagArea;
