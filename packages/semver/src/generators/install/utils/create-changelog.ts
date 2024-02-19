import { generateFiles, joinPathFragments, Tree } from '@nx/devkit';

export function createChangelog(
  tree: Tree,
  libraryRoot: string,
  changelogFilename?: string,
) {
  if (
    tree.exists(
      joinPathFragments(libraryRoot, changelogFilename || 'CHANGELOG.md'),
    )
  ) {
    return;
  }
  generateFiles(
    tree,
    joinPathFragments(__dirname, '../files'), // path to the file templates
    libraryRoot,
    {},
  );
}
