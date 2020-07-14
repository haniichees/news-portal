﻿using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NewsPortalWebApi.Data_Access.Interfaces;
using NewsPortalWebApi.Data_Access.Models;

namespace NewsPortalWebApi.Data_Access.EFCore.Repositories
{
    /// <summary>
    /// Класс репозитория для новостей 
    /// </summary>
    public class NewsRepository : IRepository<News>        
    {
        private readonly NewsPortalWebApiContext context;
        /// <summary>
        /// Констурктор репозитория
        /// </summary>
        /// <param name="context">
        /// Аргумент является контекст из базы данных
        /// </param>
        public NewsRepository(NewsPortalWebApiContext context)
        {
            this.context = context;
        }
        /// <summary>
        /// Метод для получения всех новостей
        /// </summary>
        /// <returns>
        /// Возвращает все новости из базы данных
        /// </returns>
        public IEnumerable<News> GetAll()
        {
            IEnumerable<News> news = context.News;
            //news.GroupBy(Func<;
            return news;
        }
        /// <summary>
        /// Метод для получения новости по Id
        /// </summary>
        /// <param name="id">
        /// Id нужной новости
        /// </param>
        /// <returns>
        /// Возвращает нужную новость</returns>
        public News Get(Guid id)
        {
            return context.News.Find(id);
        }
        /// <summary>
        /// Добавляет новость в базу данных
        /// </summary>
        /// <param name="entity">
        /// </param>
        public void Add(News entity)
        {
            context.Add(entity);
        }
        /// <summary>
        /// Удаляет новость по Id
        /// </summary>
        /// <param name="id">
        /// Id новости
        /// </param>
        public void Delete(Guid id)
        {
            News entity = context.News.Find(id);
            if (entity != null)
                context.News.Remove(entity);
        }
        /// <summary>
        /// Изменяет новость
        /// </summary>
        /// <param name="entity"></param>
        public void Update(News entity)
        {
            context.Entry(entity).State = EntityState.Modified;
        }
    }
}
