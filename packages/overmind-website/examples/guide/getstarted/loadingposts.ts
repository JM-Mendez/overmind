const javascript = {
  react: [
    {
      fileName: 'Posts.js',
      target: 'jsx',
      code: `
import React from 'react'

const Posts = () => {
  if (state.isLoadingPosts) {
    return <h4>Loading posts...</h4>
  }

  return <div />
}

export default Posts
    `,
    },
  ],
  vue: [
    {
      fileName: 'Posts.vue (template)',
      target: 'markup',
      code: `
<h4 v-if="state.isLoadingPosts">
  Loading posts...
</h4>
<div v-else></div>
    `,
    },
  ],
}

const typescript = {
  react: [
    {
      fileName: 'components/Posts.tsx',
      code: `
import * as React from 'react'

const Posts: React.FunctionComponent = () => {
  if (state.isLoadingPosts) {
    return <h4>Loading posts...</h4>
  }

  return <div />
}

export default Posts
    `,
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'posts.component.ts',
      code: `
import { Component } from '@angular/core';

@Component({
  selector: 'posts-list',
  template: \`
  <h4 *ngIf="overmind.state.isLoadingPosts">
    Loading posts...
  </h4>
  <div *ngIf="!overmind.state.isLoadingPosts"></div>
  \`
})
export class PostsList {}
    `,
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
