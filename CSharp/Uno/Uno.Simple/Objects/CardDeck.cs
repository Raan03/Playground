using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Uno.Simple.Enums;

namespace Uno.Simple.Objects
{
    public class CardDeck
    {
        public List<Card> Cards { get; set; }
        public CardDeck()
        {
            Cards = new List<Card>();

            foreach(CardColor color in Enum.GetValues(typeof(CardColor)))
            {
                if (color != CardColor.Wild)
                {
                    foreach(CardValue val in Enum.GetValues(typeof(CardValue)))
                    {
                        switch (val)
                        {
                            case CardValue.One:
                            case CardValue.Two:
                            case CardValue.Three:
                            case CardValue.Four:
                            case CardValue.Five:
                            case CardValue.Six:
                            case CardValue.Seven:
                            case CardValue.Eight:
                            case CardValue.Nine:
                                // add two copies of each color
                                Cards.Add(new Card
                                {
                                    Color = color,
                                    Value = val,
                                    Score = (int) val
                                });

                                Cards.Add(new Card
                                {
                                    Color = color,
                                    Value = val,
                                    Score = (int) val
                                });
                                
                                break;

                            case CardValue.Skip:
                            case CardValue.Reverse:
                            case CardValue.DrawTwo:
                                Cards.Add(new Card
                                {
                                    Color = color,
                                    Value = val,
                                    Score = 20
                                });

                                Cards.Add(new Card
                                {
                                    Color = color,
                                    Value = val,
                                    Score = 20
                                });

                                break;

                            case CardValue.Zero:
                                // add only one copy of 0 per color
                                Cards.Add(new Card
                                {
                                    Color = color,
                                    Value = val,
                                    Score = 0
                                });

                                break;
                        }
                    }
                }
                else // wildcard
                {
                    // four regulars
                    for (int i = 0; i < 4; i++)
                    {
                        Cards.Add(new Card
                        {
                            Color = color,
                            Value = CardValue.Wild,
                            Score = 50
                        });
                    }

                    // four +4 cards
                    for (int i = 0; i < 4; i++)
                    {
                        Cards.Add(new Card
                        {
                            Color = color,
                            Value = CardValue.DrawFour,
                            Score = 50
                        });
                    }
                }
            }
        }
        public void Shuffle()
        {
            Random r = new Random();

            List<Card> cards = Cards;

            for (int i = cards.Count -1; i > 0; --i)
            {
                int k = r.Next(i + 1);

                Card temp = cards[i];
                cards[i] = cards[k];
                cards[k] = temp;
            }
        }
        public List<Card> Draw(int count)
        {
            var drawnCards = Cards.Take(count).ToList();

            Cards.RemoveAll(x => drawnCards.Contains(x));

            return drawnCards;
        }
    }
}
