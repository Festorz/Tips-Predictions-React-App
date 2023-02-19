import { Box, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import { Search } from '@material-ui/icons'
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import pop from '../.../../../data/images/mauchelsea.jpg'
import { StyledBox, StyledHeading } from '../styles/global-style'
import { BlogBox, BlogChevronIcon, BlogRow, BlogSearch, BlogTitle, Categories, CategoriesBox, CategoryDescription, CategoryImage, CategoryInnerBox, InnerBox, MoreBox, SearchBox, ViewButton } from './blog-styles'
import { blog_categories } from './blog_categories'

const Blog = () => {
  return (
    <Box align='center'>
      <Helmet>
        <title>Blog | Tips Predictions</title>
        <meta name='description' content='Tips predictions results archives, popular matches analysis, jackpots games' />
      </Helmet>
      <StyledBox>
        <StyledHeading>Tips Predictions Blog</StyledHeading>
      </StyledBox>
      <BlogRow>
        <BlogBox>
          {blog_categories.map((category)=>(
          <CategoryInnerBox key={category.id}>
            <BlogTitle mcolor='black' >{category.extendedtitle}</BlogTitle>
            <CategoryImage component='img' src={category.image} />
            <CategoryDescription>{category.description}</CategoryDescription>
            <MoreBox>
            <ViewButton component={Link} to={category.route}>View</ViewButton>
            </MoreBox>
          </CategoryInnerBox>
          ))}
        </BlogBox>
        {/* search, categories ==== */}
        <BlogSearch>
          <SearchBox>
            <BlogTitle mcolor={teal[900]} mleft={2}>Search</BlogTitle>
            <form onSubmit={''} >
              <TextField name='search' label='search' variant='outlined' fullWidth onChange={'handleChange'}
                endAdornment={<InputAdornment position='end'>
                  <IconButton color='white'><Search color='black' /></IconButton>
                </InputAdornment>}
              />
            </form>
            <InnerBox>
              <BlogTitle mcolor={teal[900]} mleft={2}>Categories</BlogTitle>
              {blog_categories.map((category) => (
                <CategoriesBox key={category.id} component={Link} to={`/blog${category.route}`}>
                  <BlogChevronIcon />
                  <Categories>{category.title}</Categories>
                </CategoriesBox>

              ))}
            </InnerBox>

          </SearchBox>
        </BlogSearch>
      </BlogRow>

    </Box>
  )
}

export default Blog