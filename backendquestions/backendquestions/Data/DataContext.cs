﻿using backendquestions.Models;
using Microsoft.EntityFrameworkCore;

namespace backendquestions.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Question> Questions { get; set; }
    }
}
