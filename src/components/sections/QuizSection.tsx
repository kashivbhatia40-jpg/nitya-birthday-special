import { useState } from 'react';
import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { Heart, Check } from 'lucide-react';
import { QUIZ } from '@/content';

export function QuizSection() {
  const [answers, setAnswers] = useState<(string | null)[]>(
    new Array(QUIZ.length).fill(null)
  );
  const [checked, setChecked] = useState<boolean[]>(
    new Array(QUIZ.length).fill(false)
  );
  const [heartBurst, setHeartBurst] = useState<number | null>(null);

  const normalize = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]/g, '').trim();

  const checkAnswer = (i: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[i] = value;
    setAnswers(newAnswers);

    const newChecked = [...checked];
    const correct = normalize(value) === normalize(QUIZ[i].answer);
    newChecked[i] = correct;
    setChecked(newChecked);

    if (correct) {
      setHeartBurst(i);
      setTimeout(() => setHeartBurst(null), 1200);
    }
  };

  const correctCount = checked.filter(Boolean).length;
  const allAnswered = answers.every((a) => a !== null && a !== '');

  return (
    <section id="quiz" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={30} />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <h2 className="cinematic-heading mb-10 text-center text-2xl text-gradient-romance sm:text-3xl md:text-4xl">
            Let's see if my Baby Panda remembers us... 👀
          </h2>
        </Reveal>

        <div className="space-y-5">
          {QUIZ.map((q, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass rounded-2xl p-5">
                <p className="mb-3 text-sm font-medium text-blush-100 sm:text-base">
                  {i + 1}. {q.question}
                </p>
                <div className="flex flex-wrap gap-2">
                  {q.hints.map((hint) => (
                    <button
                      key={hint}
                      onClick={() => checkAnswer(i, hint)}
                      disabled={checked[i]}
                      className={`rounded-full px-3 py-1.5 text-xs transition-all sm:text-sm ${
                        checked[i] && normalize(hint) === normalize(q.answer)
                          ? 'bg-blush-500/20 text-blush-200 ring-1 ring-blush-400/40'
                          : checked[i]
                          ? 'text-white/20 line-through'
                          : 'glass text-white/60 hover:scale-105 hover:text-blush-100'
                      }`}
                    >
                      {hint}
                    </button>
                  ))}
                </div>
                {checked[i] && (
                  <div className="relative mt-3 flex items-center gap-2 text-sm text-blush-200 animate-fade-up">
                    <Check size={14} className="text-blush-400" />
                    {q.answer} — that's right! ❤️
                    {heartBurst === i && (
                      <span className="pointer-events-none absolute -top-2 right-2 animate-float-heart text-lg">
                        ❤️
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {allAnswered && (
          <Reveal>
            <div className="mt-10 text-center">
              <p className="font-serif text-xl text-blush-100/80 sm:text-2xl">
                Okay...
                <br />
                you still know us pretty well. ❤️
              </p>
              <p className="mt-2 text-sm text-white/40">
                ({correctCount} out of {QUIZ.length})
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
