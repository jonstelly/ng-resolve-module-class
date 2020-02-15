import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Thing: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = {
  Thing: 'thing'
 };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
