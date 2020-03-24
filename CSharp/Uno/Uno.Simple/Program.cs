using System;
using System.Collections.Generic;

namespace Uno.Simple
{
    public class MyClass
    {
        public List<Myclass1> mc { get; set; }
    }

    public class Myclass1
    {
        public string MyString { get; set; }
        public string Mystring2 { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            foreach(var p in typeof(MyClass).GetProperties())
            {
                if (p.PropertyType == typeof(List<Myclass1>))
                {
                    // halt!
                }
            }
            GameManager manager = new GameManager(4);

            manager.PlayGame();

            Console.WriteLine("Done!");
        }
    }
}
