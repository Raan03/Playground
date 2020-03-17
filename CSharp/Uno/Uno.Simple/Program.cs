using System;

namespace Uno.Simple
{
    class Program
    {
        static void Main(string[] args)
        {
            GameManager manager = new GameManager(4);

            manager.PlayGame();

            Console.WriteLine("Done!");
        }
    }
}
