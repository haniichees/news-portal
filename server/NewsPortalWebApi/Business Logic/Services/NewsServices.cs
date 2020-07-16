﻿using System;
using System.Collections.Generic;
using AutoMapper;
using NewsPortalWebApi.Business_Logic.DTO;
using NewsPortalWebApi.Business_Logic.Inerfaces;
using NewsPortalWebApi.Data_Access.Interfaces;
using NewsPortalWebApi.Data_Access.Models;

namespace NewsPortalWebApi.Business_Logic.Services
{
    /// <summary>
    /// Класс служб для работы с новостями
    /// </summary>
    public class NewsServices : INewsService<NewsShortDto, NewsDetailDto, AuthorDto>
    {
        /// <summary>
        /// Объект UnitOfWork для получения доступа к репозиториям
        /// </summary>
        private readonly IUnitOfWork _db;
        /// <summary>
        /// Объект библиотеки Mapper, содержащий в себе маппинг DTO's
        /// </summary>
        private readonly IMapper _mapper;

        /// <summary>
        /// Создание служб по классу работы с репозиториями
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="mapper"></param>
        public NewsServices(IUnitOfWork entity, IMapper mapper)
        {
            _db = entity;
            _mapper = mapper;
        }

        /// <summary>
        /// Метод получения новости по Id
        /// </summary>
        /// <param name="id">
        /// Id новости
        /// </param>
        /// <remarks>
        /// Происходит проецирование модели News на NewsDetailDTO
        /// </remarks>
        /// <returns>
        /// Возвращает новость по ее id
        /// </returns>
        public NewsDetailDto GetNews(Guid id)
        {
            return _mapper.Map<NewsDetailDto>(_db.GetNewsRep.Get(id));
        }
        /// <summary>
        /// Метод получения всех новостей
        /// </summary>
        /// <remarks>
        /// проецирование модели News на NewsShortDTO
        /// </remarks>
        /// <returns>
        /// Возвращает все новости в коротком формате
        /// </returns>
        public IEnumerable<NewsShortDto> GetAllNews()
        {
            var news = _db.GetNewsRep.GetAll();
            return _mapper.Map<IEnumerable<NewsShortDto>>(news);
        }
        /// <summary>
        /// Метод для получения Автора
        /// </summary>
        /// <param name="id">Id Автора</param>
        /// <returns>Возвращает объект Author</returns>
        public AuthorDto GetAuthorName(Guid id)
        {
            return _mapper.Map<AuthorDto>(_db.GetAuthorsRep.Get(id));
        }
    }
}
