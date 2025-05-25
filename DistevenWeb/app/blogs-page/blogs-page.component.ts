import { Component } from '@angular/core';
import { ApiService } from '../shared';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'disteven-blogs-page',
    templateUrl: './blogs-page.component.html'
})

export class BlogsPageComponent {
    private readonly HASHNODE_GQL_QUERY = `
    {
        publication(host: "blog.disteven.com") {
            posts(first: 50) {
                edges {
                    node {
                        id
                        title
                        brief
                        slug
                        coverImage {url}
                        reactionCount
                        publishedAt
                        responseCount
                        views
                        readTimeInMinutes
                    }
                }
            }
        }
    }`;

    blogs: any[] = [];
    isLoading: boolean = false;
    isError: boolean = false;

    constructor(
        private _https: ApiService
    ) { }

    ngOnInit() {
        this.getBlogs();
    }

    getBlogs() {
        this.isLoading = true;
        this._https.post('https://gql.hashnode.com', { query: this.HASHNODE_GQL_QUERY }).subscribe({
            next: (response: any) => {
                if (response && response.data && response.data.publication) {
                    const blogsList = response.data.publication.posts.edges.map((edge: any) => edge.node);
                    this.blogs = blogsList; // Duplicate for demo purposes
                    this.blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
                    console.log(this.blogs);
                    this.isError = false;
                } else {
                    this.isError = true;
                    console.error('Unexpected response structure:', response);
                }
            },
            error: (error: any) => {
                this.isError = true;
                console.error('Error fetching blogs:', error);
            }
        }).add(() => this.isLoading = false)
    }
}
