namespace Uno.Shared
{
    using Uno.Shared.Enums;

    public class Card
    {
        public CardColor Color { get; set; }
        public CardValue Value { get; set; }

        public int Score { get; set; }
    }
}